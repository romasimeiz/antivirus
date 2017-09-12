import React, {Component} from 'react';
import SkyLight from 'react-skylight';


export default class Delete extends Component {
    render() {
        const { title, link, entityId, children } = this.props;
        return (
            <span>
                <a onClick={() => this.refs.simpleDialog.show()} title={title}>
                    <span className='fa fa-trash'> </span>
                </a>
                <SkyLight hideOnOverlayClicked ref="simpleDialog" title="Project will be deleted, continue ?">
                    {/*<p></p>*/}
                    {/*<div className="modal-content">*/}
                        {/*<div className="modal-body">*/}
                        {/*</div>*/}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-white" onClick={() => this.refs.simpleDialog.hide() }>No</button>
                            <button type="button" className="btn btn-primary" onClick={ () => {this.props.deleteProject(entityId); this.refs.simpleDialog.hide(); } }>Yes</button>
                        </div>
                    {/*</div>*/}

                    {/*<div className="row">*/}
                        {/*<div className="col-md-6">*/}
                            {/*<button onClick={ () => {this.props.deleteProject(entityId); this.refs.simpleDialog.hide(); } } className="btn btn-success"> Yes </button>*/}
                        {/*</div>*/}
                        {/*<div className="col-md-6">*/}
                            {/*<button className="btn btn-danger" onClick={() => this.refs.simpleDialog.hide() }> No </button>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </SkyLight>
            </span>
        );
    }
}


