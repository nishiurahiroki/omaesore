import React from 'react'

export default class Lion extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      asciiArt : '',
      heSaid : this.props.heSaid || 'サバンナ'
    }
  }

  componentDidUpdate() {
    this.props.updateHandler(
      this.state.asciiArt
    )
  }

  render() {
    const heSaidThis = this.props.heSaid || 'サバンナ'
    this.state = {
      asciiArt : `
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
      `
    }

    return (
      <div className="lion">
        <pre>{this.state.asciiArt}</pre>
      </div>
    )
  }
}
