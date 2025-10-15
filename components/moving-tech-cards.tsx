"use client"

const technologies = [
	{
		name: "JavaScript",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
		color: "#F7DF1E",
	},
	{
		name: "TypeScript",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
		color: "#3178C6",
	},
	{
		name: "React",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
		color: "#61DAFB",
	},
	{
		name: "Node.js",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
		color: "#339933",
	},
	{
		name: "MongoDB",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
		color: "#47A248",
	},
	{
		name: "PostgreSQL",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
		color: "#336791",
	},
	{
		name: "AWS",
		logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.66.0/files/dark/aws-color.png",
		color: "#FF9900",
	},
	{
		name: "Docker",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
		color: "#2496ED",
	},
	{
		name: "Git",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
		color: "#F05032",
	},
	{
		name: "GitHub",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
		color: "#181717",
	},
	{
		name: "Express.js",
		logo: "https://res.cloudinary.com/de6nxii3v/image/upload/v1759000125/expressjs_afh1lf.avif"
,		color: "#000000",
	},
	{
		name: "Tailwind CSS",
		logo: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/tailwindcss/tailwindcss-original.svg",
		color: "#06B6D4",
	},
	{
		name: "Redux",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
		color: "#764ABC",
	},
	{
		name: "Socket.io",
		logo: "https://logo.svgcdn.com/l/socket.io.svg",
		color: "#010101",
	},
	{
		name: "WebSocket",
		logo: "https://res.cloudinary.com/de6nxii3v/image/upload/v1759000350/websocket-svgrepo-com_1_txzt54.svg",
		color: "#00BFFF",
	},
	{
		name: "Firebase",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
		color: "#FFCA28",
	},
	{
		name: "ShadCN",
		logo: "https://res.cloudinary.com/de6nxii3v/image/upload/v1759000766/shadCn_w6cnln.webp",
		color: "#111827",
	},
	{
		name: "Material UI",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
		color: "#0081CB",
	},
	{
		name: "Figma",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
		color: "#F24E1E",
	},
	{
		name: "Postman",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
		color: "#FF6C37",
	},
	{
		name: "Scrum",
		logo: "https://res.cloudinary.com/de6nxii3v/image/upload/v1760513794/scrumorg-1_y8zpxm.svg",
		color: "#F58025",
	},
	{
		name: "Jira",
		logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Jira_Logo.svg",
		color: "#A78BFA",
	},
]

function getRandomColor(index: number) {
	// Pick a color from a palette or generate a pastel color
	const palette = [
		"#F59E42",
		"#6EE7B7",
		"#A78BFA",
		"#F472B6",
		"#F87171",
		"#60A5FA",
		"#34D399",
		"#FBBF24",
		"#818CF8",
		"#F472B6",
		"#F87171",
		"#60A5FA",
		"#34D399",
		"#FBBF24",
		"#818CF8",
		"#F472B6",
		"#F87171",
		"#60A5FA",
		"#34D399",
		"#FBBF24",
	]
	return palette[index % palette.length]
}

export function MovingTechCards() {
	const firstRow = technologies.slice(0, 11)
	const secondRow = technologies.slice(10, 22)

	return (
		<section className="py-20 bg-background/50 backdrop-blur-sm border-y border-border/50">
			<div className="max-w-7xl mx-auto px-8 lg:px-16">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-foreground mb-4">
						Technologies & Tools
					</h2>
					<p className="text-muted-foreground font-mono">
						{"> tech --stack --all"}
					</p>
				</div>

				<div className="w-full space-y-8 overflow-hidden">
					{/* First row - left to right */}
					<div className="relative">
						<div className="flex animate-scroll-left gap-8 whitespace-nowrap">
							{[...firstRow, ...firstRow, ...firstRow].map((tech, index) => (
								<div
									key={`first-${index}`}
									className="flex items-center gap-4 px-8 py-6 bg-card/80 backdrop-blur-sm border rounded-xl hover:bg-card/90 transition-all duration-300 shrink-0 min-w-[280px] shadow-lg hover:shadow-xl"
									style={{
										borderColor: getRandomColor(index),
										borderWidth: "1px",
										borderStyle: "solid",
									}}
								>
									<div className="w-16 h-16 flex items-center justify-center bg-background/50 rounded-lg border border-border/30">
										<img
											src={tech.logo || "/placeholder.svg"}
											alt={tech.name}
											className="w-12 h-12 object-contain"
											style={{
												filter: `drop-shadow(0 0 8px ${tech.color}40)`,
											}}
										/>
									</div>
									<span className="font-mono text-xl font-semibold text-foreground">
										{tech.name}
									</span>
								</div>
							))}
						</div>
					</div>

					{/* Second row - right to left */}
					<div className="relative">
						<div className="flex animate-scroll-right gap-8 whitespace-nowrap">
							{[...secondRow, ...secondRow, ...secondRow].map((tech, index) => (
								<div
									key={`second-${index}`}
									className="flex items-center gap-4 px-8 py-6 bg-card/80 backdrop-blur-sm border rounded-xl hover:bg-card/90 transition-all duration-300 shrink-0 min-w-[280px] shadow-lg hover:shadow-xl"
									style={{
										borderColor: getRandomColor(index + 10),
										borderWidth: "1px",
										borderStyle: "solid",
									}}
								>
									<div className="w-16 h-16 flex items-center justify-center bg-background/50 rounded-lg border border-border/30">
										<img
											src={tech.logo || "/placeholder.svg"}
											alt={tech.name}
											className="w-12 h-12 object-contain"
											style={{
												filter: `drop-shadow(0 0 8px ${tech.color}40)`,
											}}
										/>
									</div>
									<span className="font-mono text-xl font-semibold text-foreground">
										{tech.name}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
