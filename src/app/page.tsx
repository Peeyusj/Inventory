import { db } from "@/db";
import { users } from "@/db/schemas/users";

export default async function Home() {
  const data = await db.select().from(users);

  return (
    <div>
      <div>
        {data.map((user) => (
          <div key={user.id}>
            <p>{user.firstName + user.lastName}</p>
            <p>{user.email}</p>
            <p>{user.role}</p>
            <p>{user.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
