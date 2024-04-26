import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Digital Societies";
  })
  return (
    <article className="flex flex-col min-h-screen sm:col-span-5 md:col-span-4 items-center p-2 gap-16 mb-10">
    <h2 className="text-4xl text-center uppercase text-black mt-6 pt-80">Contact</h2>
      <b>Lol no</b>
      {/*<ContactForm />*/}
    </article>
  )
}

export default Contact
