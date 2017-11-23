import React from 'react'

const Lion = (props) => {
  const heSaidThis = props.heSaid || 'サバンナ'
  return (
    <div className="lion">
      <pre>{`
  お前それ${heSaidThis}でも
  同じ事言えんの？

  　　ノ从从从从ヽ
  　(⌒／ﾞﾞﾞﾞﾞﾞ＼⌒)
  　ノｲ ＿　　＿｜ヽ
  　彡|ヽ･〉〈･ﾉ｜ミ
  　彡|　　▼　 ｜ミ
  　彡ヽ ＿人＿ / ミ
  \`／ヾヽ \`⌒′/ ツ＼
  ｜　ヾ ﾞﾞﾞﾞﾞﾞ ツ　｜
  ｜　| ヾ从从ツ |　｜
  ｜　\`――――――⌒)
  (＼＿＿＿＿＿＿＿＿)
  （⌒　　　　　　 ノ
  　￣|￣￣￣￣￣Ｔ
      `}</pre>
    </div>
  )
}

export default Lion
