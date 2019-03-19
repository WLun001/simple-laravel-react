import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Candidates extends Component {

    constructor(props) {
        super(props);

        this.state = {
            candidates: null,
            candidate: null,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const url = 'api/candidates';
        fetch(url, {
            headers: {
                Accept: 'application/json',
            },
            credentials: 'same-origin',
        })
            .then((response) => {
                if (!response.ok) throw Error([response.status, response.statusText].join(' '));
                return response.json()
            }).then((body) => {
            this.setState({
                candidates: body.data,
            })
        })
            .catch((error) => alert(error))
    }

    handleClick(event) {
        const url = `api/candidates/${event.target.value}`;
        fetch(url, {
            headers: {
                Accept: 'application/json',
            },
            credentials: 'same-origin',
        })
            .then((response) => {
                if (!response.ok) throw Error([response.status, response.statusText].join(' '));
                return response.json()
            }).then((body) => {
            this.setState({
                candidate: body.data,
            })
        })
            .catch((error) => alert(error));

    }

    render() {
        const {candidates} = this.state;

        let content;

        if (!candidates) {
            content = (
                <p>Loading data...</p>
            )
        } else if (candidates.length === 0) {
            content = (
                <p>No Candidates in record</p>
            )
        } else {
            let items = candidates.map((candidate) =>
                <tr key={candidate.id}>
                    <td>{candidate.id}</td>
                    <td>
                        <a href={'#'}>
                            <li value={candidate.id} onClick={(event) => this.handleClick(event)}>
                                {candidate.name}
                            </li>
                        </a>
                    </td>
                    <td>{candidate.party.name}</td>
                </tr>
            );

            content = (
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Party Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items}
                        </tbody>
                    </table>
                </div>
            )
        }
        let item;
        if (this.state.candidate != null) {
            item =
                <div>
                    <h6><strong>Candidate Name</strong></h6>
                    <p>{this.state.candidate.name}</p>
                    <h6><strong>Party Name</strong></h6>
                    <p>{this.state.candidate.party.name}</p>
                </div>
        }

        return (
            <div className="content-wrapper">
                {content}
                {item}
            </div>
        )

    }
}

if (document.getElementById('content-candidates')) {
    ReactDOM.render(<Candidates/>, document.getElementById('content-candidates'));
}
