export function Footer() {
  return (
    <footer className="py-10 border-t border-border bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center text-sm text-muted-foreground space-y-2">
        <p>© {new Date().getFullYear()} APiFi. All rights reserved.</p>
        <p>
          Contact:
          <a
            href="mailto:support@apifi.com"
            className="underline ml-1 hover:text-primary transition-colors"
          >
            support@apifi.com
          </a>
        </p>
      </div>
    </footer>
  );
}
