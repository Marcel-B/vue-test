FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y \
        nodejs \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /src
COPY ["VueTwo.Web/VueTwo.Web.csproj", "VueTwo.Web/"]
RUN dotnet restore "VueTwo.Web/VueTwo.Web.csproj"
COPY . .
WORKDIR "/src/VueTwo.Web"
RUN dotnet build "VueTwo.Web.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "VueTwo.Web.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "VueTwo.Web.dll"]
