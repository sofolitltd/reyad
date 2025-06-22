// components/homepage/SkillsSection.tsx

const skillCategories = [
	{
		name: 'Mobile App Development',
		skills: ['Flutter', 'Firebase', 'UI/UX Design'],
	},
	{
		name: 'YouTube & Video Content',
		skills: [
			'YouTube Channel Management',
			'Video Editing',
			'Script Writing',
			'Content Strategy',
		],
	},
	{
		name: 'WordPress Customization',
		skills: ['Theme Customization', 'Elementor', 'SEO Basics', 'WooCommerce'],
	},
	{
		name: 'Other Tools',
		skills: ['Canva', 'Figma', 'Davinci REsolve', 'Adobe Products'],
	},
];

const HIGHLIGHTED = [
	'Flutter',
	'YouTube Channel Management',
	'Video Editing',
	'WordPress Customization',
	'Canva',
];

const SkillsSection = () => {
	return (
		<section id="skills" className="py-16 sm:py-20 bg-white text-gray-900">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						My <span className="text-blue-500">Core Skills</span>
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Focused on mobile app development, YouTube content, WordPress, and
						video editing.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{skillCategories.map((category) => (
						<div
							key={category.name}
							className="bg-white border border-blue-100 p-6 rounded-lg shadow hover:shadow-blue-200 transition-shadow duration-300"
						>
							<h3 className="text-xl font-semibold text-blue-500 mb-4">
								{category.name}
							</h3>
							<ul className="space-y-2">
								{category.skills.map((skill) => (
									<li
										key={skill}
										className="text-gray-800 flex items-center"
									>
										<svg
											className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
										<span>
											{skill}
											{HIGHLIGHTED.includes(skill) && (
												<span className="ml-2 inline-flex items-center px-2 py-0.5 rounded bg-blue-500 text-xs font-semibold text-white">
													Featured
												</span>
											)}
										</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;