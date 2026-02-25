"use client";

export default function ContactInformation() {
  const items = [
    {
      title: "Looking for Talent?",
      description: `I’m open to exploring potential job opportunities and collaborations. 
    With a background in web development and software engineering, I’m eager to take on 
    roles that challenge me and allow me to create meaningful solutions. 
    If you have a project or position in mind, let’s connect and discuss!`,
    },
    {
      title: "Want to Connect?",
      description: `Networking plays a huge role in the tech industry, and I’m always excited 
    to meet new people and grow my professional network. Whether you’re a developer, 
    designer, or entrepreneur, I’d love to hear about your work. 
    Let’s grab a virtual coffee and see where the conversation goes!`,
    },
    {
      title: "Ready to Build?",
      description: `I’m passionate about creating innovative web applications that solve 
    real-world challenges. From building a custom e-commerce platform to crafting 
    a cutting-edge web app, I’m always excited for the next big idea. 
    Let’s team up and make something amazing happen!`,
    },
  ];

  return (
    <div className="pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 md:grid-cols-3 text-center">
          {items.map((item, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-cyan-500 text-3xl font-semibold font-funnel">
                {item.title}
              </h3>
              <p className="text-black dark:text-white text-xl leading-relaxed font-funnel">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
