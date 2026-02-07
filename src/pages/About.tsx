import StackIcon from 'tech-stack-icons';

export default function About() {
  return (
    <div className='space-y-4'>
      <h1 className='text-3xl font-semibold tracking-tight'>About</h1>
      <p className='max-w-2xl text-zinc-700'>
        Write a short bio here: what you specialize in, what you enjoy building,
        and what roles you’re targeting.
      </p>

      <div className='rounded-2xl border p-5'>
        <div className='font-semibold'>Skills</div>
        <p className='mt-2 text-sm text-zinc-700'>
          React, TypeScript, accessibility (WCAG), performance optimization,
          design systems, testing, APIs, etc.
        </p>
        <div className='flex gap-2 mt-4 rounded-lg border border-white p-4 bg-gray-600/50'>
          <StackIcon name='react' />
          <StackIcon name='reactquery' />
          <StackIcon name='reactrouter' />
          <StackIcon name='redux' />
          <StackIcon name='typescript' />
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
