import React from 'react';
import TestimonialImage from '../assets/01.jpg';
import TestimonialImage2 from '../assets/04.jpg';

function Team() {
  return (
		
    <div data-aos='fade-left' data-aos-duration='700' className='bg-white py-20'>
  <div className='container mx-auto px-6 text-center md:px-12'>
    <div className='mb-16 max-w-3xl mx-auto text-center pb-12 md:pb-16'>
    <h2 className='h2 mb-4'>
        Meet The Team
      </h2>
      <p className='text-xl text-gray-600'>
        MUSC Ltd prides itself not only on award-winning technology, but also on the talent of its
        people of some of the brightest minds and most experienced executives in business.
      </p>
    </div>
    <div data-aos='fade-down' class='grid gap-28 py-20 md:grid-cols-4 md:gap-12'>
      <div className='group space-y-8 border-t-4'>
        <div className='mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]'>
          <img
            className='mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]'
            src={TestimonialImage}
            alt='woman'
            loading='lazy'
            width='640'
            height='805'
          />
        </div>
        <div className='space-y-4 text-center'>
          <div>
            <h4 className='block font-bold text-lg not-italic mb-1'>Adesina Adegbemile</h4>
            <span className='block text-sm text-gray-900'>CEO-Chairman</span>
          </div>
        
				<div className='mt-6 pb-5 md:pb-0 pr-20 ml-20 w-full lg:ml-14 mx-auto flex flex-wrap items-center justify-between '>
					<a className='link' href='https://facebook.com/adesinaadegbemile' target='blank'
						data-tippy-content='@adesinaadegemile' aria-label='Facebook'>
						<svg className='h-6 fill-current text-blue-700 icon-yellow-ps rounded-lg' role='img' viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>Facebook</title>
							<path
								d='M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0' />
						</svg>
					</a>
					<a className='link' href='https://twitter.com/7amilola' target='blank'
						data-tippy-content='@ps_cristopher' aria-label='Twitter'>
						<svg className='h-6 fill-current text-blue-700 icon-yellow-ps' role='img' viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>Twitter</title>
							<path
								d='M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z' />
						</svg>
					</a>
					<a className='link' href='https://www.linkedin.com/in/damilola-adegbemile-a768b6b8' target='blank'
						data-tippy-content='@ps-cristopher' aria-label='LinkedIn'>
						<svg className='h-6 fill-current text-black-700 icon-yellow-ps' role='img' viewBox='0 0 80 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>LinkedIn</title>
							<path
								d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/></svg>
					</a>
          </div>
         
        </div>
      </div>

      <div className='group space-y-8 border-t-4'>
        <div className='mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]'>
          <img
            className='mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]'
            src=''
            alt='dotun'
            loading='lazy'
            width='640'
            height='805'
          />
        </div>
        <div className='space-y-4 text-center'>
          <div>
            <h4 className='block font-bold text-lg not-italic mb-1'>Oladotun Dawodu</h4>
            <span className='block text-sm text-gray-900'>Director</span>
          </div>
          <div className='mt-6 pb-5 md:pb-0 pr-20 ml-20 w-full lg:ml-20 mx-auto flex flex-wrap items-center justify-between '>
					<a className='link' href='https://m.facebook.com/profile.php?id=1336383265' target='blank'
						data-tippy-content='@adesinaadegemile' aria-label='Facebook'>
						<svg className='h-6 fill-current text-blue-700 icon-yellow-ps rounded-lg' role='img' viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>Facebook</title>
							<path
								d='M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0' />
						</svg>
					</a>
					<a className='link' href='https://twitter.com/7amilola/' target='blank'
						data-tippy-content='@ps_cristopher' aria-label='Twitter'>
						<svg className='h-6 fill-current text-blue-700 icon-yellow-ps' role='img' viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>Twitter</title>
							<path
								d='M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z' />
						</svg>
					</a>
					<a className='link' href='https://github.com/damilola1ade' target='blank'
						data-tippy-content='@ps-cristopher' aria-label='GitHub'>
						<svg className='h-6 fill-current text-black-700 icon-yellow-ps' role='img' viewBox='0 0 80 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>GitHub</title>
							<path
								d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
						</svg>
					</a>
          </div>
        </div>
      </div>
      

      <div className='group space-y-8 border-t-4'>
        <div className='mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]'>
          <img
            className='mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]'
            src=''
            alt='bolu'
            loading='lazy'
            width='1000'
            height='667'
          />
        </div>
        <div className='space-y-4 text-center'>
          <div>
            <h4 className='block font-bold text-lg not-italic mb-1'>Boluwatife Adegbemile</h4>
            <span className='block text-sm text-gray-900'>Director</span>
          </div>
          <div className='mt-6 pb-5 md:pb-0 pr-20 ml-20 w-full lg:ml-20 mx-auto flex flex-wrap items-center justify-between '>
		  <a className='link' href='https://www.linkedin.com/in/damilola-adegbemile-a768b6b8' target='blank'
						data-tippy-content='@ps-cristopher' aria-label='LinkedIn'>
						<svg className='h-6 fill-current text-black-700 icon-yellow-ps' role='img' viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>LinkedIn</title>
							<path
								d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/></svg>
					</a>
					<a className='link' href='https://twitter.com/7amilola/' target='blank'
						data-tippy-content='@ps_cristopher' aria-label='Twitter'>
						<svg className='h-6 fill-current text-blue-700 icon-yellow-ps' role='img' viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>Twitter</title>
							<path
								d='M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z' />
						</svg>
					</a>
					<a className='link' href='https://github.com/damilola1ade' target='blank'
						data-tippy-content='@ps-cristopher' aria-label='GitHub'>
						<svg className='h-6 fill-current text-black-700 icon-yellow-ps' role='img' viewBox='0 0 80 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>GitHub</title>
							<path
								d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
						</svg>
					</a>
          </div>
        </div>
      </div>

      <div className='group space-y-8 border-t-4'>
        <div className='mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]'>
          <img
            className='mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]'
            src={TestimonialImage2}
            alt='man'
            loading='lazy'
            width='1000'
            height='667'
          />
        </div>
        <div className='space-y-4 text-center'>
          <div>
            <h4 className='block font-bold text-lg not-italic mb-1'>Damilola Adegbemile</h4>
            <span className='block text-sm text-gray-900'>Director</span>
          </div>
          <div className='mt-6 pb-5 md:pb-0 pr-20 ml-20 w-full lg:ml-20 mx-auto flex flex-wrap items-center justify-between '>
		  <a className='link' href='https://www.linkedin.com/in/damilola-adegbemile-a768b6b8' target='blank'
						data-tippy-content='@ps-cristopher' aria-label='LinkedIn'>
						<svg className='h-6 fill-current text-black-700 icon-yellow-ps' role='img' viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>LinkedIn</title>
							<path
								d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/></svg>
					</a>
					<a className='link' href='https://twitter.com/7amilola' target='blank'
						data-tippy-content='@ps_cristopher' aria-label='Twitter'>
						<svg className='h-6 fill-current text-blue-700 icon-yellow-ps' role='img' viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>Twitter</title>
							<path
								d='M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z' />
						</svg>
					</a>
					<a className='link' href='https://github.com/damilola1ade' target='blank'
						data-tippy-content='@ps-cristopher' aria-label='GitHub'>
						<svg className='h-6 fill-current text-black-700 icon-yellow-ps' role='img' viewBox='0 0 80 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>GitHub</title>
							<path
								d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
						</svg>
					</a>
          </div>
        </div>
      </div>
    </div>
   
   
  </div>
</div>
  );
}

export default Team;