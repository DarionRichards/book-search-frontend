import {gql} from "@apollo/client";

export const GET_ME = gql`
	query Query($id: String, $username: String) {
		me(_id: $id, username: $username) {
			_id
			username
			email
			bookCount
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
