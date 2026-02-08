export default function Contact() {
  return (
    <div className='space-y-4'>
      <h1 className='text-3xl font-semibold tracking-tight'>Contact</h1>
      <p className='text-subtle max-w-2xl'>
        {/* Easiest: link to your email and socials (form can come later). */}
        If you’d like to work together or discuss an opportunity, I’d love to
        hear from you.
        <br /> The best way to reach me is by email, and you can also find my
        work on GitHub and LinkedIn.
      </p>

      <div className='rounded-2xl border border-subtle p-5 space-y-2'>
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
