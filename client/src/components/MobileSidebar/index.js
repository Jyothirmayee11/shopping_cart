import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';

import './mobileSidebar.css';

const MobileSidebar = (props) => {
    const navigate = useNavigate();

    const changeCategory = (key) => {
        console.log("e", key);
        navigate(`/products/${key}`) ;
    }

    return (
    <div >
        <div className="mobile-sidebar">

            <select className="form-control" onChange={(e) => changeCategory(e.target.value) } id="">
                 { props.categories && props.categories.map((category, index) => <option value={category.key} key={category.key}>{category.name}</option> )}
            </select>

        </div>
    </div>
    );
}

export default MobileSidebar 