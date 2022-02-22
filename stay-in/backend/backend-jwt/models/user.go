package models

type User struct {
	ID       int    `json:"id"`
	email    string `json:"email" gorm:"unique"`
	password []byte `json:"-"`
}
