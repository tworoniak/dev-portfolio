export default function Contact() {
  return (
    <div className='space-y-4'>
      <h1 className='text-3xl font-semibold tracking-tight'>Contact</h1>
      <p className='text-zinc-700'>
        Easiest: link to your email and socials (form can come later).
      </p>

      <div className='rounded-2xl border p-5 space-y-2'>
        <a
          className='block underline underline-offset-4'
          href='mailto:thomasworoniak@gmail.com'
        >
          thomasworoniak@gmail.com
        </a>
        <a
          className='block underline underline-offset-4'
          href='https://github.com/tworoniak'
        >
          GitHub
        </a>
        <a
          className='block underline underline-offset-4'
          href='https://www.linkedin.com/in/thomasworoniak/'
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
