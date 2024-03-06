import SocialButtons from "./SocialButtons";

function Footer() {
    return (
        <footer>
            <article className="flex flex-col items-center gap-5 py-10 bg-secondary">
                <div className="text-white text-center">
                    <h2 className="text-2xl">Nathan Jordens</h2>
                    <p className="text-grey px-5">Join me on my journey on becomming a dev!</p>
                </div>
                <SocialButtons />
            </article>

            <article className="bg-seablue text-white p-4 text-sm flex md:flex-row flex-col justify-between">
                <p>Copyright &copy;2024 <a className="text-tertiair underline" href="https://github.com/N4thanJ" target="_blank">N4thanJ</a></p>
                <nav>
                    <ul className="flex gap-2">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </article>
        </footer>
    )
}

export default Footer;