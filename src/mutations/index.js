import {gql} from "@apollo/client";

export const LOGIN_USER = gql`
	mutation Mutation($loginInput: LoginInput!) {
		login(loginInput: $loginInput) {
			token
			user {
				_id
				username
				email
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation Mutation($userInput: UserInput!) {
		addUser(userInput: $userInput) {
			token
			user {
				_id
				username
				email
			}
		}
	}
`;

export const SAVE_BOOK = gql`
	mutation Mutation($bookInput: BookInput!) {
		saveBook(bookInput: $bookInput) {
			_id
			username
			bookCount
		}
	}
`;

export const REMOVE_BOOK = gql`
	mutation Mutation($bookId: ID!) {
		removeBook(bookId: $bookId) {
			_id
			username
			savedBooks {
				bookId
				authors
				description
				title
				image
				link
			}
		}
	}
`;
