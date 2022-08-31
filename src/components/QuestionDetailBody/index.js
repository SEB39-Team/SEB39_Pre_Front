import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineFieldTime,
} from 'react-icons/ai';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import * as S from './style';

export default function QuestionDetailBody() {
  return (
    <S.Content>
      <S.ContentCol1>
        <AiOutlineArrowUp />
        <span>25</span>
        <AiOutlineArrowDown />
        <BsFillBookmarkStarFill />
        <AiOutlineFieldTime />
      </S.ContentCol1>
      <S.ContentCol2>
        I was getting started with Next.js on WebStorm 2022.2.1 Build
        #WS-222.3739.57 I created a new Next.js project with typescript enabled
        and thats all, The error is shown below: <br />
        <br />
        The error is shown below:
        <br />
        TypeError: this.libOptions.parse is not a function
        {` TypeError: this.libOptions.parse is not a function `}
        <br />
        {`at ESLint8Plugin.<anonymous> (C:\Program Files\JetBrains\WebStorm 2022.1.2\plugins\JavaScriptLanguage\languageService\eslint\bin\eslint8-plugin.js:139:64)`}
        <br />
        {`at step (C:\Program Files\JetBrains\WebStorm 2022.1.2\plugins\JavaScriptLanguage\languageService\eslint\bin\eslint8-plugin.js:44:23)`}
        <br />
        {`at Object.next (C:\Program Files\JetBrains\WebStorm 2022.1.2\plugins\JavaScriptLanguage\languageService\eslint\bin\eslint8-plugin.js:25:53)`}
        <br />
        {`at C:\Program Files\JetBrains\WebStorm 2022.1.2\plugins\JavaScriptLanguage\languageService\eslint\bin\eslint8-plugin.js:19:71`}
        <br />
        {`at new Promise (<anonymous>)`}
        <br />
        {`at __awaiter (C:\Program Files\JetBrains\WebStorm 2022.1.2\plugins\JavaScriptLanguage\languageService\eslint\bin\eslint8-plugin.js:15:12)`}
        <br />
        {`at ESLint8Plugin.invokeESLint (C:\Program Files\JetBrains\WebStorm 2022.1.2\plugins\JavaScriptLanguage\languageService\eslint\bin\eslint8-plugin.js:133:16)`}
        <br />
        {`at ESLint8Plugin.<anonymous> (C:\Program Files\JetBrains\WebStorm 2022.1.2\plugins\JavaScriptLanguage\languageService\eslint\bin\eslint8-plugin.js:120:44)`}
        <br />
        {`at step (C:\Program Files\JetBrains\WebStorm 2022.1.2\plugins\JavaScriptLanguage\languageService\eslint\bin\eslint8-plugin.js:44:23)`}
        <br />
        {`at Object.next (C:\Program Files\JetBrains\WebStorm`}
        <br />
        {`2022.1.2\plugins\JavaScriptLanguage\languageService\eslint\bin\eslint8-plugin.js:25:53)`}
        <br />
        {`Process finished with exit code -1`}
        <S.Tags>
          <button>node.js</button>
          <button>eslint</button>
          <button>webstorm</button>
          <button>eslintrc</button>
          <button>typescript</button>
        </S.Tags>
        <S.ContentFooter>
          <S.FooterCol1>
            <span>Share</span>
            <span>Edit</span>
            <span>Follow</span>
            <span>edited Aug 27 at 10:12</span>
          </S.FooterCol1>
          <S.FooterCol2>
            <p>asked Aug 27 at 9:55</p>
            <div className="col">
              <img src="https://i.pinimg.com/originals/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg" />
              <span>Thebluedragon</span>
            </div>
          </S.FooterCol2>
        </S.ContentFooter>
        <S.AddBtn>Add a comment</S.AddBtn>
      </S.ContentCol2>
    </S.Content>
  );
}
