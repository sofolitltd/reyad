// components/homepage/ProjectsSection.tsx

"use client";
import ProjectCard, { Project } from '@/components/ProjectCard';
import Link from 'next/link';
import { motion } from 'framer-motion';

const featuredProjects: Project[] = [
	{
		id: 'proj1',
		title: 'Campus Assistant',
		description:
			'A comprehensive education app for university students, featuring course management, campus info, and notifications. ',
		imageUrl: '/images/ca.png',
		tags: ['Flutter', 'Firebase', 'Figma', 'Android', 'Web', 'Play Store'],
		liveUrl: 'https://play.google.com/store/apps/details?id=com.sofolit.campusassistant&pcampaignid=web_share',
		githubUrl: '#',
		category: 'Mobile & Web App',
	},
	{
		id: 'proj2',
		title: 'The Forge ',
		description:
			'A modern portfolio website for The Forge, built with Next.js and Sanity CMS, deployed on Vercel.',
		imageUrl: '/images/forge.png',
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
		imageUrl: '/images/pet.png',
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
		imageUrl: '/images/wellbeing.png',
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
		transition: { delay: i * 0.15, duration: 0.6 },
	}),
};

const ProjectsSection = () => {
	return (
		<section id="projects" className="py-16 sm:py-20 bg-white text-gray-900">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						Featured <span className="text-teal-400">Projects</span>
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Here are some of the projects I'm proud to have worked on.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
					{featuredProjects.map((project, i) => (
						<motion.div
							key={project.id}
							custom={i}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
							variants={cardVariants}
						>
							<div className="bg-white text-gray-900 border border-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col h-full transition-transform duration-300 hover:scale-[1.025]">
								<ProjectCard project={project} />
							</div>
						</motion.div>
					))}
				</div>
				<div className="text-center mt-16">
					<Link href="/projects" legacyBehavior>
						<a className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
							View All Projects
						</a>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;