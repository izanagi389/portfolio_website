<template>
  <!-- プロフィールカードセクション -->
  <section class="py-12">
    <div class="container mx-auto px-4">
      <div class="">
        <!-- プロフィールカード -->
        <div
          class="bg-white rounded-lg shadow-lg overflow-hidden card-slide-in hover-effect"
        >
          <div class="flex flex-col items-center p-6">
            <!-- <img
                src="profile.jpg"
                alt="プロフィール画像"
                class="w-32 h-32 rounded-full border-4 border-summer mb-4 transition-transform duration-300 transform hover:scale-110"
              /> -->
            <h2 class="text-2xl font-semibold mb-2 text-summer text-fade-in">
              田中 太郎
            </h2>
            <p class="text-gray-600 mb-4 text-fade-in">
              フリーランスのグラフィックデザイナー
            </p>

            <!-- スキルセクション -->
            <div class="mb-4 w-full">
              <h3 class="text-xl font-semibold mb-2 text-summer text-fade-in">スキル</h3>
              <ul class="list-disc list-inside text-gray-600">
                <li class="hover-effect bg-gray-200 rounded-lg p-3 mb-2 shadow-md">
                  Adobe Creative Suite (Photoshop, Illustrator, InDesign)
                </li>
                <li class="hover-effect bg-gray-200 rounded-lg p-3 mb-2 shadow-md">
                  HTML/CSS
                </li>
                <li class="hover-effect bg-gray-200 rounded-lg p-3 mb-2 shadow-md">
                  UX/UIデザイン
                </li>
              </ul>
            </div>

            <!-- 成果セクション -->
            <div class="mb-4 w-full">
              <h3 class="text-xl font-semibold mb-2 text-summer text-fade-in">
                成果や実績
              </h3>
              <ul class="list-disc list-inside text-gray-600">
                <li class="hover-effect bg-gray-200 rounded-lg p-3 mb-2 shadow-md">
                  XYZ株式会社のロゴデザインリニューアル
                </li>
                <li class="hover-effect bg-gray-200 rounded-lg p-3 mb-2 shadow-md">
                  ABCスタートアップのウェブサイトデザイン
                </li>
              </ul>
            </div>

            <!-- 連絡先セクション -->
            <div class="w-full text-center">
              <h3 class="text-xl font-semibold mb-2 text-summer text-fade-in">連絡先</h3>
              <p>
                <a
                  href="mailto:tanaka@example.com"
                  class="text-summer font-semibold hover:underline"
                  >メールを送る</a
                >
              </p>
              <p>
                <a
                  href="https://linkedin.com/in/tanaka"
                  class="text-summer font-semibold hover:underline"
                  >LinkedIn</a
                >
              </p>
              <p>
                <a
                  href="https://instagram.com/taro_tanaka_design"
                  class="text-summer font-semibold hover:underline"
                  >Instagram</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
