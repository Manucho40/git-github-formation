class User {
    // Propriétés
    private id: number;
    private firstName: string;
    private lastName: string;
    private email: string;
    private isActive: boolean;

    // Constructeur
    constructor(
        id: number,
        firstName: string,
        lastName: string,
        email: string,
        isActive: boolean = true
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.isActive = isActive;
    }

    // Getters
    getId(): number {
        return this.id;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getEmail(): string {
        return this.email;
    }

    // Setters
    setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    // Méthodes métier
    activate(): void {
        this.isActive = true;
    }

    deactivate(): void {
        this.isActive = false;
    }

    updateProfile(firstName: string, lastName: string, email: string): void {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    toString(): string {
        return `
      User {
        id: ${this.id},
        fullName: ${this.getFullName()},
        email: ${this.email},
        active: ${this.isActive}
      }
    `;
    }
}

// Utilisation
const user = new User(
    1,
    "Emmanuel",
    "Kouassi",
    "emmanuel@example.com"
);

console.log(user.getFullName()); // Emmanuel Kouassi

user.deactivate();

user.updateProfile(
    "Ange Emmanuel",
    "Kouassi",
    "ange@example.com"
);

console.log(user.toString());