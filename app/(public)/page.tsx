import Link from "next/link"

export default function IndexPage() {

  return (
    <>
      <section className="pt-6 pb-8 space-y-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold font-heading sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="font-[400]">Hey!</span><br/>
           How can we help?
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            
          </p>
        </div>
      </section>
      <section
        id="features"
        className="container py-8 space-y-3 bg-slate-50 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-2 text-center mb-8 md:mb-16">
          <h2 className="font-heading text-2xl leading-[1.1] sm:text-2xl md:text-5xl">
            API Documentation & Guides
          </h2>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Link href="/docs">
            <div className="relative p-2 overflow-hidden border rounded-lg bg-background">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="w-10 h-10 md:w-14 md:h-14">
                  <svg className="w-full h-full image-contain" width="283" height="346" viewBox="0 0 283 346" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M216 0H150L216 115L150 229L216 345.5H283L216 229L283 115L216 0Z" className="fill-current"/>
                    <path d="M67 346L133 346L67 231L133 117L67 117L-1.00536e-05 231L67 346Z" className="fill-current"/>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">API Docs</h3>
                  <p className="text-sm text-muted-foreground">
                    Authentication, types, endpoints.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/guides">
            <div className="relative p-2 overflow-hidden border rounded-lg bg-background">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
                  <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">Tutorials</h3>
                  <p className="text-sm text-muted-foreground">
                    In depth tutorials on using Rescene to automate image generation.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/blog">
            <div className="relative p-2 overflow-hidden border rounded-lg bg-background">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
                  <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">Blog</h3>
                  <p className="text-sm text-muted-foreground">
                    Check out the latest posts from our team.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        
      </section>
    </>
  )
}
