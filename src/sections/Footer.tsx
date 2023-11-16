export default function Footer() {
    return (
        <>
            <footer className=" dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="flex justify-center py-8">

                        <ul className="flex justify-end  items-end mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#about" className="mr-4 hover:underline md:mr-6 ">Biz haqimizda</a>
                            </li>
                            <li>
                                <a href="#rahbariyat" className="mr-4 hover:underline md:mr-6">Rahbariyat</a>
                            </li>
                            <li>
                                <a href="#hujjatlar" className="mr-4 hover:underline md:mr-6 ">Hizmatlar narxlari</a>
                            </li>
                            <li>

                                <a href="#kontaktlar" className="hover:underline">Kontaktlar</a>

                            </li>
                        </ul>
                    </div>



                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="flex justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; {new Date().getFullYear()} Barcha huquqlar himoyalangan.</span>
                </div>
            </footer>
        </>
    )
}


export function Footer2() {
    return (
        <>
            <div id='footer' className="flex items-center justify-center py-8 ">


                <div className="mapouter"><div className="gmap_canvas">
                    <iframe src="https://maps.google.com/maps?width=523&amp;height=403&amp;hl=en&amp;q=oblastnoy%20balnitsa%20guliston%20Ilford+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{ width: 790, height: 500 }}></iframe>
                    <style>{`
      .mapouter{position:relative;height:400px;min-width:375px;background:#fff;}
      `}
                    </style>

                    <style>{`.gmap_canvas{overflow:hidden;height:400px;min-width:375px}.gmap_canvas iframe{position:relative;z-index:2}`}</style></div></div>

            </div>

            <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800 pt-8 bg-gradient-to-r from-sky-500 to-indigo-500">
                <div className="mx-auto max-w-screen-xl">
                    <div className="md:flex md:justify-center flex-col ">


                        <ul className="flex justify-end  items-end mb-6 text-sm font-medium text-white sm:mb-0 ">
                            <li>
                                <a href="#about" className="mr-4 hover:underline md:mr-6 ">Biz haqimizda</a>
                            </li>
                            <li>
                                <a href="#rahbariyat" className="mr-4 hover:underline md:mr-6">Rahbariyat</a>
                            </li>
                            <li>
                                <a href="#hujjatlar" className="mr-4 hover:underline md:mr-6 ">Hizmatlar narxlari</a>
                            </li>

                        </ul>
                        <div className="flex flex-col ">
                            <p className="text-white">
                               Guliston shaxar, III-mavze,  IBN-Sino ko&apos;chasi, 13-uy
                            </p>
                            ____________________
                            <p className="text-white">
                                67 226-25-24 bemorlar qabulxonasi
                                <br />
                               67 226-36-59 fax
                                <br />
                                 67 226-49-79 ma&apos;muriyatniki
                            </p>
                        </div>

                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                    <div className="flex items-center justify-center">
                        <span className="text-sm text-white text-center ">&copy; {new Date().getFullYear()} Barcha huquqlar himoyalangan.
                        </span>

                    </div>
                </div>
            </footer>
        </>
    )
}