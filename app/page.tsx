"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

/* 

The main tabs component, Receive, Invest, NFTs

*/

function TabsComponent() {
  return (
    <Tabs defaultValue="receive" className="w-full">
      <TabsList className="w-full flex gap-2 bg-white mb-4 py-6">
        <TabsTrigger
          value="receive"
          className="
            cursor-pointer 
            py-5
            text-[1rem]
            bg-[#f7f7f7]
            text-[#9E9E9E]
            hover:bg-gray-200 
            data-[state=active]:bg-[#CEE4FF] 
            data-[state=active]:text-[#0E76FD]"
        >
          Receive
        </TabsTrigger>
        <TabsTrigger
          value="invest"
          className="
            cursor-pointer 
            py-5
            text-[1rem]
            bg-[#f7f7f7]
            text-[#9E9E9E]
            hover:bg-gray-200 
            data-[state=active]:bg-[#CEE4FF] 
            data-[state=active]:text-[#0E76FD]"
        >
          Invest
        </TabsTrigger>
        <TabsTrigger
          value="NFTs"
          className="
            cursor-pointer 
            py-5
            text-[1rem]
            bg-[#f7f7f7]
            text-[#9E9E9E]
            hover:bg-gray-200 
            data-[state=active]:bg-[#CEE4FF] 
            data-[state=active]:text-[#0E76FD]"
        >
          NFTs
        </TabsTrigger>
      </TabsList>
      <TabsContent value="receive">
        <ReceiveModule />
      </TabsContent>
      <TabsContent value="invest">
        <InvestModule />
      </TabsContent>
      <TabsContent value="NFTs">
        <NFTModule />
      </TabsContent>
    </Tabs>
  );
}

/* 

The select amount component at the top of the receive module

*/

function SelectAmount() {
  const [isUnique, setIsUnique] = useState(false);
  return (
    <Card className="p-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-2">
          <Input
            placeholder="Enter amount"
            disabled={isUnique}
            className="flex-2"
          />
          <Select>
            <SelectTrigger className="w-full mt-0 flex-1">
              <SelectValue placeholder="Select a currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">USD</SelectItem>
              <SelectItem value="eur">EUR</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Switch checked={isUnique} onCheckedChange={setIsUnique} />
          <Label>Any amount</Label>
        </div>
      </div>
    </Card>
  );
}

/* 

The dropdown component with props for different use cases

*/

interface DropdownProps {
  label: string;
  options: string[];
  placeholder: string;
  subtext?: string;
}

function Dropdown({ label, options, subtext, placeholder }: DropdownProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[1rem] text-[#9E9E9E]">{label}</p>
      <Select>
        <SelectTrigger className="w-full mt-0 min-h-12 text-[#9E9E9E]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {subtext && <p className="text-sm text-muted-foreground">{subtext}</p>}
    </div>
  );
}

/* 

Button component for various places

*/

interface WoopButtonProps {
  label: string;
  flex?: boolean;
  secondary?: boolean;
}

function WoopButton({ label, flex, secondary }: WoopButtonProps) {
  return (
    <Button
      className={`${flex ? "flex-1" : "w-full"} ${
        secondary
          ? "bg-white text-[#0E76FD] border-1 border-[#0E76FD] hover:bg-[#1164D0] hover:text-white"
          : "bg-[#0E76FD] text-white hover:bg-[#1164D0]"
      } py-6 cursor-pointer text-[1rem]`}
    >
      {label}
    </Button>
  );
}

/* 

Component for Woop message

*/

interface TransactionMessageProps {
  label: string;
  placeholder: string;
}

function TransactionMessage({ label, placeholder }: TransactionMessageProps) {
  return (
    <div className="flex flex-col gap-2 text-[#9E9E9E]">
      <p className="text-[1rem] text-[#9E9E9E]">{label}</p>
      <Input placeholder={placeholder} className="min-h-12 text-[#9E9E9E]" />
    </div>
  );
}

/* 

DeFi Card component

*/

function DeFiCard() {
  return (
    <Card className="p-4 bg-[#f7f7f7]">
      <div className="flex flex-row justify-between items-end">
        <h3 className="text-[#8e8e8e] text-2xl font-bold">USDC / USDT Pool</h3>
        <Badge className="text-sm text-[#9e9e9e] rounded-full">1-4% APY</Badge>
      </div>
      <div className="flex flex-col gap-0">
        <p className="text-sm text-[#9e9e9e]">
          Platform: <span className="font-bold">Curve Finance</span>
        </p>
        <p className="text-sm text-[#9e9e9e]">
          Network: <span className="font-bold">Ethereum</span>
        </p>
        <p className="text-sm text-[#9e9e9e]">
          Assets invested:{" "}
          <span className="font-bold">108 USDC / 108 USDT</span>
        </p>
        <p className="text-sm text-[#9e9e9e]">
          Rewards available to claim: <span className="font-bold">$66.34</span>
        </p>
        <p className="text-sm text-[#9e9e9e]">
          Total amount gained: <span className="font-bold">$768.98</span>
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <WoopButton label="Manage" flex />
        <WoopButton label="Claim rewards" flex secondary />
      </div>
    </Card>
  );
}

/* 

The receive module in its entirety

*/

function ReceiveModule() {
  return (
    <div className="flex flex-col gap-6">
      <SelectAmount />
      <Tabs defaultValue="wallet" className="w-full">
        <TabsList className="w-full flex gap-2 bg-white mb-4 py-6">
          <TabsTrigger
            value="wallet"
            className="
            cursor-pointer 
            py-5
            text-[1rem]
            bg-[#f7f7f7]
            text-[#9E9E9E]
            hover:bg-gray-200 
            data-[state=active]:bg-[#CEE4FF] 
            data-[state=active]:text-[#0E76FD]"
          >
            Crypto Wallet
          </TabsTrigger>
          <TabsTrigger
            value="bank"
            className="
            cursor-pointer 
            py-5
            text-[1rem]
            bg-[#f7f7f7]
            text-[#9E9E9E]
            hover:bg-gray-200 
            data-[state=active]:bg-[#CEE4FF] 
            data-[state=active]:text-[#0E76FD]"
          >
            Bank Account
          </TabsTrigger>
        </TabsList>
        <TabsContent value="wallet">
          <Dropdown
            label="Select wallet"
            options={[
              "0xfe2...14b (someone.eth)",
              "0xe4b...2cd",
              "0x123...456",
            ]}
            placeholder="Select a wallet"
          />
        </TabsContent>
        <TabsContent value="bank">
          <Dropdown
            label="Send to"
            options={["USD", "EUR"]}
            subtext="Your associated EVM wallet is: 0xfe2...14b"
            placeholder="Select a bank account"
          />
        </TabsContent>
      </Tabs>
      <TransactionMessage label="Message" placeholder="Pizza yesterday" />
      <WoopButton label="Continue" />
    </div>
  );
}

/* 

The invest module in its entirety

*/

function InvestModule() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#0E76FD]">
        Invest your funds across different DeFi protocols depending on your
        preferences. For examples, Ethereum staking or stablecoin yield
        generation.
      </p>
      <WoopButton label="New investment" />
      <div className="flex flex-col gap-2">
        <p className="text-[#0E76FD] font-bold">Current investment worth</p>
        <h2 className="text-[#0E76FD] text-5xl font-bold">$3,123.47</h2>
        <div>
          <p className="text-sm text-[#9e9e9e]">
            Invested across three networks
          </p>
          <p className="text-sm text-[#9e9e9e]">
            Total amount gained: <span className="font-bold">$768.98</span>
          </p>
          <p className="text-sm text-[#9e9e9e]">
            Rewards available to be claimed:{" "}
            <span className="font-bold">$66.34</span>
          </p>
        </div>
      </div>
      <DeFiCard />
    </div>
  );
}

/* 

The NFT module in its entirety

*/

function NFTModule() {
  return (
    <div>
      <p className="text-[#0E76FD] font-bold">Bored Ape Yacht Club</p>
      <Image
        src="/bored-ape.png"
        alt="Bored Ape NFT"
        width={600}
        height={600}
        className="rounded-t-lg w-full"
      />
      <Card className="p-4 bg-[#f7f7f7]">
        <div className="flex flex-col gap-0">
          <h3 className="text-[#8e8e8e] text-2xl font-bold">#8782</h3>
          <p className="text-sm text-[#9e9e9e]">
            Floor price:<span className="font-bold">12.99 ETH </span>
            <span className="text-xs">($24,531.79) </span>
          </p>
          <p className="text-sm text-[#9e9e9e]">
            Platform: <span className="font-bold">OpenSea</span>
          </p>
        </div>
      </Card>
      <WoopButton label="Buy" />
    </div>
  );
}

/* 

The main Woop Widget component

*/

function WoopWidget() {
  return (
    <Card className="w-full p-6">
      <div className="flex justify-between">
        <Image
          src="/woop-logo.svg"
          alt="Woop Logo"
          width={180}
          height={38}
          priority
          className="h-8 w-auto"
        />
        <X className="h-6 w-6 text-[#9E9E9E]" />
      </div>
      <TabsComponent />
    </Card>
  );
}

function CodeDescription() {
    return (
        <div className="fixed right-7 top-7">
            <div className="flex flex-row gap-2">
                <p className="text-sm text-[#9E9E9E]">Built with React</p>
                <p className="text-sm font-semibold text-[#575757]">Still in development</p>
            </div>
        </div>
    )
}

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center mt-24 gap-4 w-full max-w-lg mx-auto">
      <WoopWidget />
      <CodeDescription />
    </div>
  );
}