"use client"

const TWEETS = [
  {
    avatar: "/images/tweet_william.jpeg",
    name: "William Imóveis",
    handle: "@william_imoveis",
    text: '"No primeiro trimestre da mentoria supremus, fechamos 25% mais vendas do que todo ano anterior"',
    likes: "847",
    comments: "124",
    reposts: "312",
    views: "41,2K",
    date: "15 Mar 2025",
  },
  {
    avatar: "/images/tweet_cristiano.jpg",
    name: "Cristiano Heerdt",
    handle: "@cristiano_heerdt",
    text: '"Em apenas dois meses da mentoria supremus, fechamos 804 mil em comissões"',
    likes: "1,2K",
    comments: "89",
    reposts: "456",
    views: "58,7K",
    date: "02 Abr 2025",
  },
  {
    avatar: "/images/tweet_imobiliaria.jpg",
    name: "Renove Imobiliária",
    handle: "@renoveimoveis",
    text: '"Com apenas dois corretores, em doze meses de mentoria, fechamos R$ 1.950.000 em comissões"',
    likes: "623",
    comments: "67",
    reposts: "234",
    views: "29,1K",
    date: "20 Jan 2025",
  },
  {
    avatar: "/images/tweet_topimoveis.jpeg",
    name: "Top Imóveis",
    handle: "@topimoveis",
    text: '"Batemos 11 milhões em comissões em 12 meses de mentoria"',
    likes: "2,1K",
    comments: "203",
    reposts: "891",
    views: "113K",
    date: "07 Fev 2025",
  },
  {
    avatar: "/images/tweet_brasilurban.jpg",
    name: "Brasil Urban",
    handle: "@brasilurban",
    text: '"Com a mentoria supremus, sozinho em 6 meses bati 39 milhões em vendas"',
    likes: "3,4K",
    comments: "421",
    reposts: "1,2K",
    views: "187K",
    date: "11 Mar 2025",
  },
]

const DOUBLED = [...TWEETS, ...TWEETS]

function XIcon() {
  return (
    <svg viewBox="0 0 1200 1227" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] text-white">
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  )
}

function VerifiedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="#1d9bf0" xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] flex-shrink-0">
      <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91C2.88 9.33 2 10.57 2 12s.88 2.67 2.19 3.34c-.46 1.39-.2 2.9.81 3.91s2.52 1.26 3.91.8c.66 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.33-2.19c1.4.46 2.91.2 3.92-.81s1.26-2.52.8-3.91C21.37 14.67 22.25 13.43 22.25 12zm-6.16-1.35L10.4 16.26c-.19.19-.45.29-.7.29s-.51-.1-.7-.29l-2.83-2.83a.996.996 0 010-1.41c.39-.39 1.02-.39 1.41 0l2.12 2.12 5-5.02c.39-.39 1.02-.39 1.41 0 .4.4.4 1.03.01 1.43z" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-[17px] h-[17px]">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CommentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-[17px] h-[17px]">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function RepostIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-[17px] h-[17px]">
      <polyline points="17 1 21 5 17 9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="7 23 3 19 7 15" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ViewsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-[17px] h-[17px]">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function TweetCard({ tweet }: { tweet: (typeof TWEETS)[0] }) {
  return (
    <div className="tweet-card">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={tweet.avatar}
            alt={tweet.name}
            className="w-11 h-11 rounded-full object-cover flex-shrink-0 ring-1 ring-black/10"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <p className="text-gray-900 font-bold text-[15px] leading-tight">{tweet.name}</p>
              <VerifiedIcon />
            </div>
            <p className="text-gray-400 text-[13px] leading-tight mt-0.5">{tweet.handle}</p>
          </div>
        </div>
        <div className="flex-shrink-0 mt-0.5 text-black opacity-80">
          <XIcon />
        </div>
      </div>

      {/* Tweet text */}
      <p className="text-gray-800 text-[15px] leading-[1.55] mb-4 flex-1">
        {tweet.text}
      </p>

      {/* Date */}
      <p className="text-gray-400 text-[13px] mb-4">{tweet.date}</p>

      {/* Divider */}
      <div className="border-t border-black/8 mb-3" />

      {/* Engagement stats */}
      <div className="flex items-center gap-5 text-gray-400 text-[13px]">
        <span className="flex items-center gap-1.5 hover:text-[#1d9bf0] transition-colors cursor-pointer">
          <CommentIcon />
          {tweet.comments}
        </span>
        <span className="flex items-center gap-1.5 hover:text-[#00ba7c] transition-colors cursor-pointer">
          <RepostIcon />
          {tweet.reposts}
        </span>
        <span className="flex items-center gap-1.5 hover:text-[#f91880] transition-colors cursor-pointer">
          <HeartIcon />
          {tweet.likes}
        </span>
        <span className="flex items-center gap-1.5 hover:text-[#1d9bf0] transition-colors cursor-pointer">
          <ViewsIcon />
          {tweet.views}
        </span>
      </div>
    </div>
  )
}

export function TweetCarousel() {
  return (
    <div className="tweet-carousel-outer">
      <div className="tweet-track tweet-track--fwd">
        {DOUBLED.map((tweet, i) => (
          <TweetCard key={`fwd-${i}`} tweet={tweet} />
        ))}
      </div>
    </div>
  )
}
