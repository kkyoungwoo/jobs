import Layout from "@/components/Layout";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <Layout metaTitle={"Page Not Found"}>
      <section className="section-sm pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="page-not-found-title">E-7 VISA</h1>
                <p>shares the company information</p>
                <p>Come into the chat room</p>
                <p>E7 회사를 공유하는 단체 채팅방을 만들었습니다</p>
                <p>I created a group chat room that shares an e7 company.</p>
                <Link href="https://open.kakao.com/o/gbCgvaPe">
                  <a className="btn btn-primary">Go to KakaoTalk</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
