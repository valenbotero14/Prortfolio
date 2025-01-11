// Importa íconos específicos desde la librería 'react-icons' para su uso en componentes de React
// FiGithub: Ícono de GitHub
import { FiGithub } from 'react-icons/fi'

// AiOutlineMail: Ícono de correo electrónico
import { AiOutlineMail } from 'react-icons/ai'

// CgFileDocument: Ícono de documento
import { CgFileDocument } from 'react-icons/cg'

//Discord
import { FaDiscord } from 'react-icons/fa';


const Icons = () => {
  return (
    <>
      <div className="flex my-5 max-sm:flex-col max-sm:items-center max-sm:py-6">
        <a
          target="blank"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=valentinavelazquez172@gmail.com"
          className="flex justify-center items-center bg-[#343639] mr-3 w-32 my-7 py-3 px-6 rounded-full font-semibold text-sm hover:scale-105 hover:transition-all hover:ease-in-out max-sm:my-0 max-sm:w-[14rem]"
        >
          <AiOutlineMail style={{ fontSize: '1.3rem' }} />
          <p className="ml-3">Email</p>
        </a>

        <a
          target="blank"
          href="https://github.com/valenbotero14"
          className="flex justify-center items-center bg-[#343639] mr-3 w-32 my-7 py-3 px-6 rounded-full font-semibold text-sm hover:scale-105 hover:transition-all hover:ease-in-out max-sm:my-3 max-sm:w-[14rem]"
        >
          <FiGithub style={{ fontSize: '1.3rem' }} />
          <p className="ml-3">Github</p>
        </a>

        <a
          target="blank"
          href="https://discord.com/users/565355154082365465"
          className="flex justify-center items-center bg-[#343639] mr-3 w-32 my-7 py-3 px-6 rounded-full font-semibold text-sm hover:scale-105 hover:transition-all hover:ease-in-out max-sm:my-0 max-sm:w-[14rem]"
        >
          <FaDiscord style={{ fontSize: '1.3rem' }} />
          <p className="ml-3">Discord</p>
        </a>

        <a
  href="/docs/Curriculum Es.pdf"
  download
  className="flex justify-center items-center bg-[#343639] mr-3 w-32 my-7 py-3 px-6 rounded-full font-semibold text-sm hover:scale-105 hover:transition-all hover:ease-in-out max-sm:my-3 max-sm:w-[14rem]"
  onClick={(e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/docs/Curriculum Es.pdf';
    link.download = 'Curriculum Es.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  <CgFileDocument style={{ fontSize: '1.3rem' }} />
  <p className="ml-3">My CV</p>
</a>
      </div>
    </>
  )
}

export default Icons
