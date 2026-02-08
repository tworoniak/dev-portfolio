import StackIcon from 'tech-stack-icons';

export default function About() {
  return (
    <div className='space-y-4'>
      <div className='flex flex-col items-center md:flex-row gap-4 mb-8'>
        <div>
          <h1 className='text-3xl font-semibold tracking-tight'>About</h1>
          <p className='max-w-2xl text-subtle mt-4'>
            I’m a Senior Front-End Developer specializing in building fast,
            accessible, and visually polished web applications using React and
            TypeScript. I enjoy creating clean UI systems, performance-optimized
            experiences, and intuitive user flows that feel modern and
            responsive. I’m currently targeting Senior Frontend Developer /
            Senior Frontend Engineer roles where I can contribute to high-impact
            products and collaborate closely with design and product teams.
          </p>
        </div>

        <img
          src='https://res.cloudinary.com/df6mhecko/image/upload/v1770163286/1a7766f0-6f1c-4bc5-8369-f6c6fce032a2_rw_1920_aaeveq.jpg'
          alt='Thomas Woroniak'
          className='rounded-lg max-w-96'
        />
      </div>

      <div className='rounded-2xl border border-subtle p-5'>
        <div className='font-semibold'>Skills</div>
        <p className='mt-2 text-sm text-faint'>
          React, TypeScript, TailwindCSS, Figma, accessibility (WCAG),
          performance optimization, design systems, testing, APIs, etc.
        </p>
        <div className='flex gap-2 mt-4 rounded-lg border border-subtle p-4 bg-gray-600/50'>
          <StackIcon name='react' />
          <StackIcon name='reactquery' />
          <StackIcon name='reactrouter' />
          <StackIcon name='redux' />
          <StackIcon name='typescript' />
          <StackIcon name='figma' />
          <StackIcon name='html5' />
          <StackIcon name='css3' />
          <StackIcon name='bootstrap4' />
          <StackIcon name='jquery' />
          <StackIcon name='json' />
          <StackIcon name='nextjs' />
          <StackIcon name='nodejs' />
          <StackIcon name='vitejs' />
          <StackIcon name='expressjs' />
          <StackIcon name='mongodb' />
          <StackIcon name='mongoose' />
          <StackIcon name='vscode' />
        </div>
      </div>
    </div>
  );
}
