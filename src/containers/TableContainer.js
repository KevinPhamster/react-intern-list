/**
 * Created by kagek_000 on 11/2/2016
 */
import { connect } from 'react-redux';
import InternTable from '../components/InternTable';

const mapStateToProps = (state) => {
    return {
        interns: state.interns
    }
};

export default connect(mapStateToProps)(InternTable);