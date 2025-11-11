export function Footer() {
  return (
    <footer className="py-10 border-t">
      <div className="container text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} APIFI. All rights reserved.</p>

        <p className="mt-2">
          Contact:
          <a href="mailto:support@mysaas.com" className="underline ml-1">
            support@apifi.com
          </a>
        </p>
      </div>
    </footer>
  );
}
