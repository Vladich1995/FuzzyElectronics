import styles from './AdminSidebar.module.css'

const AdminSidebar = (props) => {

    const createBuildHandler = () => {
        props.onChoose("CreateBuild");
    }

    const readyBuildsHandler = () => {
        props.onChoose("ReadyBuilds");
    }

    const pastDealsHandler = () => {
        props.onChoose("PastDeals");
    }

    const futureDealsHandler = () => {
        props.onChoose("FutureDeals");
    }

    return (
        <nav id="sidebarMenu" className={`collapse d-lg-block sidebar collapse bg-white ${styles.container}`}>
            <div class="position-sticky">
                <div class="list-group list-group-flush mx-3 mt-4">
                    <a onClick={createBuildHandler} style={{cursor: 'pointer'}} class="list-group-item list-group-item-action py-2 ripple text-center">
                    <i class="fas fa-chart-area fa-fw me-3"></i><span>הרכבת מפרט</span>
                    </a>
                    <a onClick={readyBuildsHandler} style={{cursor: 'pointer'}} class="list-group-item list-group-item-action py-2 ripple text-center">
                    <i class="fas fa-chart-area fa-fw me-3"></i><span>מפרטים מוכנים</span>
                    </a>
                    <a onClick={pastDealsHandler} style={{cursor: 'pointer'}} class="list-group-item list-group-item-action py-2 ripple text-center"
                    ><i class="fas fa-lock fa-fw me-3"></i><span>עסקאות שבוצעו</span></a>
                    <a onClick={futureDealsHandler} style={{cursor: 'pointer'}} class="list-group-item list-group-item-action py-2 ripple text-center"
                    ><i class="fas fa-chart-line fa-fw me-3"></i><span>עסקאות בהמתנה לאישור</span>
                    </a>                
                </div>
            </div>
        </nav>
    )
}

export default AdminSidebar;