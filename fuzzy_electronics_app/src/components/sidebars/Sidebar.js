import styles from './Sidebar.module.css';

const Sidebar = (props) => {

    const categoryChooseHandler = (category) => {
        props.onChoose(category);
    }

    return (
        <>
            <nav id="sidebarMenu" className={`collapse d-lg-block sidebar collapse bg-white ${styles.rightSidebar}`}>
                <div className="position-sticky">
                    <div className={`list-group list-group-flush mx-3 mt-4 bg-white ${styles.barItems}`}>
                        <a className={`list-group-item list-group-item-action py-2 ripple bg-white ${styles.section}`} data-category="Cases"
                            onClick={(e) => {
                                e.preventDefault();
                                const categoryText = e.currentTarget.getAttribute('data-category');
                                categoryChooseHandler(categoryText);
                            }}>
                        <i className="fas fa-chart-area fa-fw me-3"></i><span>Cases</span>
                        </a>
                        <a className={`list-group-item list-group-item-action py-2 ripple bg-white ${styles.section}`}
                            data-category="MB"
                            onClick={(e) => {
                                e.preventDefault();
                                const categoryText = e.currentTarget.getAttribute('data-category');
                                categoryChooseHandler(categoryText);
                            }}>
                        <i className="fas fa-lock fa-fw me-3"></i><span>MB</span></a>
                        
                        <a className={`list-group-item list-group-item-action py-2 ripple bg-white ${styles.section}`}
                            data-category="Memory"
                            onClick={(e) => {
                                e.preventDefault();
                                const categoryText = e.currentTarget.getAttribute('data-category');
                                categoryChooseHandler(categoryText);
                            }}>
                        <i className="fas fa-chart-line fa-fw me-3"></i><span>Memory</span></a>
                        
                        <a className={`list-group-item list-group-item-action py-2 ripple bg-white ${styles.section}`}
                            data-category="CPU"
                            onClick={(e) => {
                                e.preventDefault();
                                const categoryText = e.currentTarget.getAttribute('data-category');
                                categoryChooseHandler(categoryText);
                            }}>
                        <i className="fas fa-chart-pie fa-fw me-3"></i><span>CPU</span>
                        </a>
                        <a className={`list-group-item list-group-item-action py-2 ripple bg-white ${styles.section}`}
                            data-category="PCSystem"
                            onClick={(e) => {
                                e.preventDefault();
                                const categoryText = e.currentTarget.getAttribute('data-category');
                                categoryChooseHandler(categoryText);
                            }}>
                        <i className="fas fa-chart-bar fa-fw me-3"></i><span>PCSystem</span></a>
                        
                        <a className={`list-group-item list-group-item-action py-2 ripple bg-white ${styles.section}`}
                            data-category="VGA"
                            onClick={(e) => {
                                e.preventDefault();
                                const categoryText = e.currentTarget.getAttribute('data-category');
                                categoryChooseHandler(categoryText);
                            }}>
                        <i className="fas fa-globe fa-fw me-3"></i><span>VGA</span></a>

                        <a className={`list-group-item list-group-item-action py-2 ripple bg-white ${styles.section}`}
                            data-category="PSU"
                            onClick={(e) => {
                                e.preventDefault();
                                const categoryText = e.currentTarget.getAttribute('data-category');
                                categoryChooseHandler(categoryText);
                            }}>
                        <i className="fas fa-chart-bar fa-fw me-3"></i><span>PSU</span></a>

                        <a className={`list-group-item list-group-item-action py-2 ripple bg-white ${styles.section}`}
                            data-category="Capacity"
                            onClick={(e) => {
                                e.preventDefault();
                                const categoryText = e.currentTarget.getAttribute('data-category');
                                categoryChooseHandler(categoryText);
                            }}>
                        <i className="fas fa-globe fa-fw me-3"></i><span>Capacity</span></a>
                        
                        <a className={`list-group-item list-group-item-action py-2 ripple bg-white ${styles.section}`}
                            data-category="Peripherals"
                            onClick={(e) => {
                                e.preventDefault();
                                const categoryText = e.currentTarget.getAttribute('data-category');
                                categoryChooseHandler(categoryText);
                            }}>
                        <i className="fas fa-globe fa-fw me-3"></i><span>Peripherals</span></a>
                        
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Sidebar;