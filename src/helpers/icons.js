import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faStickyNote
} from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faStickyNote);
};

export default Icons;
