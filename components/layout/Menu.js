import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>

       
            <ul className="main-menu__list">
                <li className="dropdown megamenu">
                    <a href="/">ACCEUIL </a>
                </li>
                <li className="dropdown">
                    <Link href="#">SERVEURS</Link>
                    <ul>
                        <li><Link href="/">IBM</Link></li>
                        <li><Link href="/">LENOVDO</Link></li>
                        <li><Link href="/">HPE</Link></li>
                        <li><Link href="/">DELL</Link></li>
                        <li><Link href="/">FUJITSU</Link></li>
                        <li><Link href="/">HUAWEI</Link></li>
                        <li><Link href="/">SUPPERMICRO</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">EXPERTISE</Link>
                    <ul>
                        <li><Link href="/">INGÉNIERIE LOGICIELLE</Link></li>
                        <li><Link href="/">RÉSEAU ET SÉCURITÉ</Link></li>
                        <li><Link href="/">CLOUD COMPUTING</Link></li>
                        <li><Link href="/">DEVELLOPEMENT</Link></li>
                        <li><Link href="/">INTÉGRATION</Link></li>
                        <li><Link href="/">ASSURANCE QUALITÉ</Link></li>
                    
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">ACTUALLITÉ</Link>
                    
                </li>
                <li className="dropdown">
                    <Link href="#">APPLICATIONS</Link>
                </li>
                <li>
                    <Link href="/">À PROPOS</Link>
                </li>
                <li>
                    <Link href="contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
