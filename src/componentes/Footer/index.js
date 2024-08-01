import './Footer.css'

const Footer = () =>{
    return (
        <footer className='rodape'>
            <div className='links'>
                <a href='https://www.facebook.com/' target='_blank' rel="noreferrer"><img src='/imagens/fb.png' alt='Facebook icone'/></a>
                <a href='https://x.com/home?lang=pt-br' target='_blank' rel="noreferrer"><img src='/imagens/tw.png' alt='Twitter icone' /></a>
                <a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><img src='/imagens/ig.png' alt='Instagram icone' /></a>
            </div>
            <div>
                <img src='/imagens/logo.png' alt='Organo logo'/>
            </div>
            <div>
                <p>Desenvolvido por Alura</p>
            </div>
        </footer>
    )
}

export default Footer