
import './index.css'

export default function Header() {
    return (
        <div className="hser theme-white">
            <div className="hser-item">
                <div className="hser-icon">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style={{pointerEvents: 'none', display: 'block', width: '100%', height: '100%'}}>
                        <g class="style-scope yt-icon">
                            <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" className="style-scope yt-icon"></path>
                        </g>
                    </svg>
                </div>
            </div>
            <div className="hser-item yt-l">
                <img src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png" alt=""/>
            </div>
            <div className="espit"></div>
            <div className="hser-item msearch">
                <div>
                    <div className="searhinp">
                        <input type="text" placeholder="Buscar"/>
                        <button>
                            <svg x="0px" y="0px" width="20px" height="20px" viewBox="0 0 632.399 632.399" style={{enableBackground:'new 0 0 632.399 632.399'}}>
                                <g>
	                                <path d="M255.108,0C119.863,0,10.204,109.66,10.204,244.904c0,135.245,109.659,244.905,244.904,244.905c52.006,0,100.238-16.223,139.883-43.854l185.205,185.176c1.671,1.672,4.379,1.672,5.964,0.115l34.892-34.891c1.613-1.613,1.47-4.379-0.115-5.965L438.151,407.605c38.493-43.246,61.86-100.237,61.86-162.702C500.012,109.66,390.353,0,255.108,0z M255.108,460.996c-119.34,0-216.092-96.752-216.092-216.092c0-119.34,96.751-216.091,216.092-216.091s216.091,96.751,216.091,216.091C471.199,364.244,374.448,460.996,255.108,460.996z"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="espit"></div>
            <div className="hser-item item-list">
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
