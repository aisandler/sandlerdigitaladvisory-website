import { useState } from 'react';
import type { Project, FileItem } from '../../types/portal';

interface FileRepositoryProps {
  projects: Project[];
}

export default function FileRepository({ projects }: FileRepositoryProps) {
  const [selectedProject, setSelectedProject] = useState<string | 'all'>('all');
  const [files] = useState<FileItem[]>([]); // TODO: Implement Google Drive API integration

  const filteredFiles = selectedProject === 'all'
    ? files
    : files.filter(file => file.projectId === selectedProject);

  return (
    <div className="space-y-6">
      {/* Project Filter */}
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium text-gray-700">Project:</span>
        <select
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <option value="all">All Projects</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.title}
            </option>
          ))}
        </select>
      </div>

      {/* File Grid */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Files</h3>
        </div>
        <div className="bg-gray-50">
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-12 py-3 px-4 text-sm font-medium text-gray-500">
              <div className="col-span-6">Name</div>
              <div className="col-span-2">Type</div>
              <div className="col-span-2">Size</div>
              <div className="col-span-2">Last Modified</div>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {filteredFiles.map((file) => (
              <div
                key={file.id}
                className="grid grid-cols-12 py-3 px-4 text-sm text-gray-500 hover:bg-gray-100"
              >
                <div className="col-span-6 flex items-center">
                  <a
                    href={file.googleDriveId ? `https://drive.google.com/file/d/${file.googleDriveId}` : '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {file.name}
                  </a>
                </div>
                <div className="col-span-2">{file.type}</div>
                <div className="col-span-2">
                  {formatFileSize(file.size)}
                </div>
                <div className="col-span-2">
                  {new Date(file.lastModified).toLocaleDateString()}
                </div>
              </div>
            ))}
            {filteredFiles.length === 0 && (
              <div className="py-8 text-center text-gray-500">
                No files found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
} 