import Link from "next/link";
import { Fragment } from "react";

function Service(){
    return(
        <Fragment>
            <ol>
                <Link href={"/service_page/app-development"}><li>App-Development</li></Link>
                <Link href={"/service_page/web-development"}><li>Web-Development</li></Link>
            </ol>
        </Fragment>
    )
}
export default Service;