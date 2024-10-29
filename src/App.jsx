import './App.css';

export function App () {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                 src="https://unavatar.io/s0yvalen" alt="El avatar de s0yValen" />
                <div className='tw-followCard-info'>
                    <strong>Valentina Vargas</strong>
                    <span className='tw-followCard-infoUserName'>@s0yValen</span>
                </div>
            </header>

            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>
    )
}