import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>VogelCodes.com - Iniciando na programação aos 30</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-2xl font-bold">
          Como construí{' '}
          <a className="text-blue-500" href="https://vogelcodes.com">
          meu site
          </a>
          {' '}em 15 minutos.
          
        </h1>

        <p className="mt-3 text-2xl">
          Usando apenas: GitHub, NextJS, Vercel.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <div
            className="p-6 mt-6 text-left border w-96 rounded-xl"
          >
            <h3 className="text-2xl font-bold">GitHub &rarr;</h3>
            <p className="mt-4 text-xl">
              Criar conta uma conta gratuita em{' '}<a             href="https://github.com"
>https://github.com</a>, para salvar o código da nossa página em um local seguro independente de hospedagem.
              
            </p>
          </div>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">NextJS &rarr;</h3>
            <p className="mt-4 text-xl">
              Framework para criação de sites modernos usando NodeJS. A maneira mais <strong>simples</strong> de colocar sua página no ar, tendo controle total sobre o código.
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Vercel &rarr;</h3>
            <p className="mt-4 text-xl">
              Serviço de hospedagem gratuito para projetos web. Associando a conta GitHub pode fazer o carregamento - <strong className="bg-gray-100">Deploy</strong> - de qualquer repositório na plataforma em minutos.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
