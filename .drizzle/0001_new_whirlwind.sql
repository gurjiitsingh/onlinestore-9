CREATE TABLE IF NOT EXISTS "address" (
	"addressId" serial PRIMARY KEY NOT NULL,
	"userId" uuid,
	"addressLine1" varchar NOT NULL,
	"addressLine2" varchar,
	"city" varchar,
	"state" varchar,
	"zipcode" varchar
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "address" ADD CONSTRAINT "address_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
