import React from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";
import {connect} from "react-redux";
import {signOut} from "../../pages/sign-up/SignUpActionCreators";

class Header extends React.Component {
	state = {
		isOpen: false
	};

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	signOut = () => {
		this.props.dispatch(signOut())
	};

	render() {
		return (
			<div>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">OWI</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink
									className={"cursor-pointer"}
									onClick={this.signOut}
								>
									Sign out
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/zhukevgeniy/owi">
									GitHub
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default connect(state => ({
	signup: state.signup
}))(Header);
