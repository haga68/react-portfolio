import React from 'react'
import { Button } from 'react-bootstrap';
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import wordpress from "../Images/wordpress.png";
import profileImage from "../Images/panda.jpg";
import unity from "../Images/unity.png";
import python from "../Images/python.png";
import php from "../Images/php.jpg";
import c from "../Images/c.png";
import htmlImage from "../Images/html-css.jpg";

const HomePage = () => {
  return (
    <div>
      <div className="container text-center">
      <h1>D.H</h1>

      <img src={profileImage} className="profileImage" />

      <p>
      中国広東省深センにて、語学スクール経営のかたわら、趣味でウェブアプリやゲームを個人開発してます。
      50歳を過ぎてから、プログラミングの世界に入るという、無謀な試み？を実践中です。
      </p>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">主なアクティビティ</h2>
            {/* <h3 class="section-subheading text-muted mb-5">
              作品一覧
            </h3> */}
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-desktop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">ウェブアプリ開発</h4>
              <p class="text-muted">
              Python（Django）、Reactなどを使用して、ウェブアプリを開発。
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-blog fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">ウェブ制作</h4>
              <p class="text-muted">
              HTML, CSS, WordPresssなどを使用して、ホームページ、ブログサイトなどを制作。
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-gamepad fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">ゲーム開発</h4>
              <p class="text-muted">
                ゲームエンジン（Unity）と、Visual Studioを使って、ゲーム開発。
              </p>
            </div>        

          </div>
        </div>
      </section>

      <section id="skill">
        <div class="text-center">
          <h2 class="title">使用言語と試作品</h2>
          <p>開発環境・・・OSはWindows。エディタは、主にVSコードを使用。
            使用言語は、以下の通りです。</p>          
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={python} />
              <h4>Python</h4>
              <p>主にDjangoフレームワークを使用して、ブログ、ECサイトなど簡単なウェブアプリ開発。
              </p>
            </div>
            <div class="col-md-4 services">
              <img src={jsImage} />
              <h4>JavaScript</h4>
              <p>React,NextJS,ThreeJSなどライブラリを使用して、デスクトップアプリやウェブアプリを開発。</p>
              <a href="https://calculator-sigma-three-78.vercel.app/">計算機</a>
              <p>以下のブラウザゲーム（15パズル）は、画像を好きなものと交換することができます。</p>
              <a href="https://15puzzle-six.vercel.app/">15パズル</a>
            </div>
            <div class="col-md-4 services">
              <img src={reactImage} />
              <h4>React</h4>
              <p>以下、ReactとAPIを利用して作った簡単な画像検索アプリです（英語で検索）</p>
              <a href="https://react-image-search-app-beta.vercel.app/">Image Search App</a>
            </div>
            <div class="col-md-4 services">
              <img src={htmlImage} />
              <h4>HTML,CSS</h4>
              <p>HTML,CSSについてで、ホームページ等、ウェブサイトの制作</p>
            </div>
            <div class="col-md-4 services">
              <img src={wordpress} />
              <h4>WordPress</h4>
              <p>WordPressを使用して、ブログ（以下）を運営中です。</p>
              <a href="https://sz-now.com/">深センなう</a>
            </div>
            <div class="col-md-4 services">
              <img src={unity} />
              <h4>Unity</h4>
              <p>ゲームエンジンUnityと統合開発環境VSを使用して、小規模ゲーム開発します。</p>
            </div>
            <div class="col-md-4 services">
              <img src={c} />
              <h4>C言語</h4>
              <p>統合開発環境（VS）を使用して、メモリ、ポインタ、構造体などの概念を座学。
                また、ゲームライブラリ（DXLibrary）を用いて、簡単なゲームを作成。</p>
            </div>
            {/* <div class="col-md-4 services">
              <img src={php} />
              <h4>PHP</h4>
              <p>LAMP環境(Xampp,Apache,MySQL)にて、Laravelフレームワークを使用してウェブアプリ開発</p>
            </div> */}
          </div>
          
          {/* <button type="button" class="btn btn-primary">
            スキル一覧
          </button> */}
        </div>
      </section>
    </div>
    </div>
  )
}

export default HomePage