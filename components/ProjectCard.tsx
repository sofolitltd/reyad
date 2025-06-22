// components/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';

export interface Project {
  id: string | number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category?: string; // Optional for filtering/display
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col h-full border border-gray-200">
      {project.imageUrl && (
        <div className="relative w-full h-48 sm:h-56">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-300 group-hover:opacity-90"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-3 text-blue-500">{project.title}</h3>
        <p className="text-gray-700 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>
        <div className="mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-blue-50 border border-blue-100 rounded-full px-3 py-1 text-xs font-semibold text-blue-600 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex justify-start space-x-4 pt-2">
          {project.liveUrl && (
            <Link href={project.liveUrl} 
              
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg text-sm transition duration-300"
              >
                Live Demo
              
            </Link>
          )}
          {/* {project.githubUrl && (
            <Link href={project.githubUrl} legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg text-sm transition duration-300"
              >
                GitHub
              </a>
            </Link>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;