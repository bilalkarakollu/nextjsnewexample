import Link from 'next/link'
export default function Home(){

  return(
      <>
        <h1>Anasayfa</h1>
          <div>

              <Link href={'/posts'}>
                  post sayfası
              </Link>
          </div>
      </>
  )
}


