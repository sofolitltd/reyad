"use client";
import ProjectCard, { Project } from '@/components/ProjectCard';
import { motion } from 'framer-motion';

const allProjects: Project[] = [
	{
		id: 'proj1',
		title: 'Campus Assistant',
		description:
			'A comprehensive education app for university students, featuring course management, campus info, and notifications.',
		imageUrl: '/images/project-campus-assistant.jpg',
		tags: ['Flutter', 'Firebase', 'Figma', 'Android', 'Web', 'Play Store'],
		liveUrl:
			'https://play.google.com/store/apps/details?id=com.sofolit.campusassistant&pcampaignid=web_share',
		githubUrl: '#',
		category: 'Mobile & Web App',
	},
	{
		id: 'proj2',
		title: 'The Forge',
		description:
			'A modern portfolio website for The Forge, built with Next.js and Sanity CMS, deployed on Vercel.',
		imageUrl: '/images/project-the-forge.jpg',
		tags: ['Next.js', 'Sanity', 'Vercel'],
		liveUrl: 'https://theforgebd.vercel.app/',
		githubUrl: '#',
		category: 'Web Development',
	},
	{
		id: 'proj3',
		title: 'Petelements BD',
		description:
			'An e-commerce website for a pet shop, built with WordPress. Features product catalog, cart, and online ordering.',
		imageUrl: '/images/project-petelementsbd.jpg',
		tags: ['WordPress', 'E-commerce'],
		liveUrl: 'https://www.petelementsbd.com/',
		githubUrl: '#',
		category: 'E-commerce',
	},
	{
		id: 'proj4',
		title: 'Wellbeing Clinic',
		description:
			'A mental health and wellbeing app for psychology support and clinic management. Available on web, Android, and Play Store.',
		imageUrl: '/images/project-wellbeing-clinic.jpg',
		tags: ['Mental Health', 'Web', 'Android', 'Play Store', 'Psychology'],
		liveUrl: '#',
		githubUrl: '#',
		category: 'Health & Wellness',
	},
];

const cardVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.12, duration: 0.5 },
	}),
};

export default function ProjectsPage() {
	return (
		<section className="py-16 sm:py-20 bg-white text-gray-900 min-h-screen">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold mb-4">
						All{' '}
						<span className="text-teal-400">Projects</span>
					</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Explore all my featured and client projects.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
					{allProjects.map((project, i) => (
						<motion.div
							key={project.id}
							custom={i}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
							variants={cardVariants}
						>
							<ProjectCard project={project} />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}