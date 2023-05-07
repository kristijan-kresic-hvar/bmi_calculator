import Image from 'next/image'
import logoSVG from '@/assets/img/logo.svg'

export default function Home() {
    return (
        <div className="app w-full">
            <header className="w-full">
                <section className="bg-header-gradient w-[70%] h-[737px] rounded-header-radius relative pl-[116px] pr-[32px]">
                    <div className="absolute top-[75px]">
                        <Image
                            width={64}
                            height={64}
                            src={logoSVG}
                            alt="logo"
                        />
                    </div>
                    <article className="max-w-[564px] h-full w-full flex flex-col justify-center">
                        <h1 className="prose-heading-xl text-gunmetal mb-[2.187rem]">
                            Body Mass Index Calculator
                        </h1>
                        <p className="prose-body-m text-dark-electric-blue">
                            Better understand your weight in relation to your
                            height using our body mass index (BM) calculator.
                            While BMI is not the sole determinant of a healthy
                            weight, it offers a valuable starting point to
                            evaluate your overall health and well-being.
                        </p>
                    </article>
                </section>
            </header>
        </div>
    )
}
