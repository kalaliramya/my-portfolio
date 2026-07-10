export default function CodePanel() {
  const CONFIG = {
    name: "Kalali Ramya",
    titleHighlight: "Full Stack",
    title: "Developer",
    yearsExp: "5"
  };

  return (
    <div className="code-window">
      <div className="code-titlebar">
        <span className="dot dot-r"></span>
        <span className="dot dot-y"></span>
        <span className="dot dot-g"></span>
        <span className="code-filename">Developer.cs</span>
      </div>

      <div className="code-body">
        <div>
          <span className="c-kw">public class</span>{" "}
          <span className="c-cy">Developer</span> {"{"}
        </div>

        <div>
          &nbsp;&nbsp;<span className="c-kw">public string</span>{" "}
          <span className="c-fn">Name</span> ={" "}
          <span className="c-str">"{CONFIG.name}"</span>;
        </div>

        <div>
          &nbsp;&nbsp;<span className="c-kw">public string</span>{" "}
          <span className="c-fn">Role</span> ={" "}
          <span className="c-str">
            "{CONFIG.titleHighlight} {CONFIG.title}"
          </span>;
        </div>

        <div>
          &nbsp;&nbsp;<span className="c-kw">public int</span>{" "}
          <span className="c-fn">Experience</span> ={" "}
          <span className="c-num">{parseInt(CONFIG.yearsExp)}</span>;
        </div>

        <div>
          &nbsp;&nbsp;<span className="c-kw">public bool</span>{" "}
          <span className="c-fn">OpenToWork</span> ={" "}
          <span className="c-num">true</span>;
        </div>

        <div>
          &nbsp;&nbsp;<span className="c-kw">public string[]</span>{" "}
          <span className="c-wh">Stack</span> = {"{"}{" "}
          <span className="c-str">".NET"</span>,{" "}
          <span className="c-str">"React"</span>,{" "}
          <span className="c-str">"Azure"</span> {"}"};
        </div>

        <div>{"}"}</div>

        <div>&nbsp;</div>

        <div>
          <span className="c-cm">// Ready to build something great?</span>
        </div>

        <div>
          <span className="c-kw">var</span> dev ={" "}
          <span className="c-kw">new</span>{" "}
          <span className="c-cy">Developer</span>();{" "}
          <span className="cursor-blink"></span>
        </div>
      </div>
    </div>
  );
}