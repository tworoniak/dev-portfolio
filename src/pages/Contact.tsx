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
          href='mailto:you@email.com'
        >
          you@email.com
        </a>
        <a
          className='block underline underline-offset-4'
          href='https://github.com/yourname'
        >
          GitHub
        </a>
        <a
          className='block underline underline-offset-4'
          href='https://linkedin.com/in/yourname'
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
