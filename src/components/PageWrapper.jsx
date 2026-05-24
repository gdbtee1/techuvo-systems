export default function PageWrapper({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 md:px-10 lg:px-16 py-16">

      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            {subtitle}
          </p>
        )}
      </div>

      {children}

    </div>
  );
}